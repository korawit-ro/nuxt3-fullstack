export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const result = await Blog.deleteOne({ _id: id });
  if (result.deletedCount === 0) {
    throw createError({
      statusCode: 404,
      message: "Cannot delete",
    });
  }
  setResponseStatus(event, 200);
  return {
    message: "delete blog from db",
    data: result,
  };
});
