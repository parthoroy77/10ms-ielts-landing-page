"use server";
import { Data } from "@/types";

export const getData = async (params?: { lang: "en" | "bn" }) => {
  const lang = params?.lang || "bn";

  const url = "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course" + `?lang=${lang}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
        tags: [lang],
      },
    });

    if (!response.ok) {
      throw Error("HTTP request error");
    }

    const result = await response.json();
    return result.data as Data;
  } catch (error) {
    throw error;
  }
};
