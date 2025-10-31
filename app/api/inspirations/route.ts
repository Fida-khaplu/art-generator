import { Data } from "@/data/data";

export async function GET(req: Request) {
  try {
    const data =  Data;

    return new Response(
      JSON.stringify({
        message: "Data fetched successfully",
        data: data,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("❌ Error fetching data:", err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
