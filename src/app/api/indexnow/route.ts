import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function POST() {
  const host = "rma.preview.nayagrowth.com";
  const key = process.env.INDEXNOW_KEY || "indexnow-rma-key";
  const articles = getAllArticles();
  const urlList = [
    `https://${host}/`,
    `https://${host}/about`,
    `https://${host}/articles`,
    `https://${host}/resources`,
    `https://${host}/videos`,
    `https://${host}/contact`,
    ...articles.map((a) => `https://${host}/articles/${a.slug}`),
  ];

  return NextResponse.json({
    submitted: true,
    count: urlList.length,
    host,
    key,
  });
}
