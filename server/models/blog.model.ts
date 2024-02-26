import { defineMongooseModel } from "#nuxt/mongoose";

export const Blog = defineMongooseModel(
  "Blog",
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: "blogs",
    timestamps: true,
    versionKey: false,
  }
);
