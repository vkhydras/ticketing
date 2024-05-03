import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
    try {
        const {id} = params
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({message:"Ticket DEleted"},{status: 200})
    } catch (error) {
        return NextResponse.json({message: "Error deleteing ticket", error},{status: 500})
    }
}