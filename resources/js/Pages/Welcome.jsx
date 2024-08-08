import SelamatDatang from "@/Layouts/SelamatDatang";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Welcome({
    bukus,
    banyakDipinjam,
    rekomendasiBuku,
    karyaIlmiah,
    karyaNonIlmiah,
    ekonomi,
    karyaIlmiahSlider,
    karyaNonIlmiahSlider,
    ekonomiSlider,
    slider,
}) {
    return (
        <div>
            <Head title="Selamat Datang" />
            <SelamatDatang
                slider={slider}
                karyaIlmiahSlider={karyaIlmiahSlider}
                karyaNonIlmiahSlider={karyaNonIlmiahSlider}
                ekonomiSlider={ekonomiSlider}
                karyaIlmiah={karyaIlmiah}
                karyaNonIlmiah={karyaNonIlmiah}
                ekonomi={ekonomi}
                data={rekomendasiBuku}
                bukuBanyakDipijnam={banyakDipinjam}
            />
        </div>
    );
}

export default Welcome;
