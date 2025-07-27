"use server";
import { Data } from "@/types";

export const getData = async (params?: { lang: "en" | "bn" }) => {
  const url =
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course" + `?lang=${params?.lang || "en"}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
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
