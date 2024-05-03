import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket DEleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleteing ticket", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const data = await Ticket.findById(id)

    if (!data) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get data", error },
      { status: 500 }
    );
  }
}

export async function put(req, { params }) {
    try {
      const { id } = params;
      const body = await req.body.data
      console.log(body)
      await Ticket.findByIdAndUpdate(id)
      return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error updating ticket", error },
        { status: 500 }
      );
    }
  }