export default defineEventHandler(async (event) => {
  const query: any = getQuery(event);
  const skip = (Number(query.page) - 1) * Number(query.pageSize);
  const total = await Blog.find().countDocuments();
  const result = await Blog.find()
    .sort("-_id")
    .limit(query.pageSize)
    .skip(skip)
    .exec();
  return {
    total,
    message: "pagination",
    data: result,
  };
});
