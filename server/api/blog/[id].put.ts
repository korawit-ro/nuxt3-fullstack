import { isValidObjectId } from 'mongoose';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!isValidObjectId(id)) {
    throw createError({
      statusCode: 400,
      message: "Invalid objectId",
    });
  }
  const model = await Blog.findById(id);
  if (!model) {
    throw createError({
      statusCode: 404,
      message: "Cannot find data",
    });
  }
  const body = await readBody(event);
  const result = await Blog.updateOne({ _id: id }, body);
  return {
    message: "update one blog from db",
    data: result,
  };
});
