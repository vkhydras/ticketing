import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("Post ran")
    try {
        const body = req.body; 
        const ticketData = body.formData;
        await Ticket.create(ticketData);

        return NextResponse.json({message:"Ticket Created"},{status: 201}); 
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500}); 
    }
}

export async function GET(){
    try {
        const Tickets = await Ticket.find(); 
        return NextResponse.json({ Tickets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Unable to fetch tickets", error }, { status: 500 }); 
    }
}

