"use client";

import { useEffect, useState } from "react";
import { Window } from "../components/window";

type Member = {
    name: string;
    photo: string;
}

export default function Membros() {
    const [members, setMembers] = useState<Member[]>();

    useEffect(() => {
        fetch("https://api-petsimc.facom.ufu.br/member").then(d => d.json()).then(d => setMembers(d.data.members))
    }, [])

    return (
        <div className="w-full p-4 flex justify-center">
            <Window>
                <div className="text-center p-4">
                    <h1 className="font-ps2p text-x1">Membros</h1>
                    <h2 className="font-ps2p text-w95-dark-grey">Membros atuais do PET-SIMC</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-4 max-w-{1282px}">
                {members && members.map((m, i) => (
                    <div key={i} className="border-4 border-w95-blue">
                        <img
                            src={"data:image/jpeg;base64," + m.photo}
                            width={142}
                            height={142}
                            className="aspect-square"
                        />
                    </div>
                ))}
                </div>
            </Window>
        </div>
    );
}