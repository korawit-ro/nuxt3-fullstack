export default defineEventHandler(async (event) => {
    const result = await Blog.find().sort('-_id').exec();
    return {
      message: "get all blogs from db",
      data: result,
    };
  });
  