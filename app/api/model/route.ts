import { imgData } from "@/data/data";

export async function GET(req: Request) {
  try {
    const data =  imgData;

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

export async function POST(req: Request) {
  try {
    
    const { prompt } = await req.json();
        console.log("==============>>>> inside post request",prompt);

    const data =  imgData;

    if (!prompt) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    
    return new Response(
      JSON.stringify({
        message: "Data fetched successfully",
        data: data,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("❌ Error creating user:", err);
    return new Response(
      JSON.stringify({ message: "Database error", error: err.message }),
      { status: 500 }
    );
  }
}
