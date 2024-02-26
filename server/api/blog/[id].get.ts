import { isValidObjectId } from 'mongoose';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!isValidObjectId(id)) {
    throw createError({
      statusCode: 400,
      message: "Invalid objectId",
    });
  }
  const result = await Blog.findById(id);
  if (!result) {
    throw createError({
      statusCode: 404,
      message: "Cannot find data",
    });
  }
  
  return {
    message: "get one blog from db",
    data: result,
  };
});
