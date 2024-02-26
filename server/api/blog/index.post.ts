export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const blog = await Blog.create(body);
  setResponseStatus(event, 201);
  return {
    message: "insert blogs from db",
    data: blog
  };
});
