import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Scan from "@/models/Scan";


export async function GET() {

  try {

    await connectDB();


    const scans =
      await Scan.find()
      .sort({
        createdAt: -1,
      })
      .limit(20);


    return NextResponse.json(
      scans
    );


  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        error:
          "Failed to load scan history",
      },

      {
        status: 500,
      }
    );

  }

}