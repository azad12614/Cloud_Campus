import React from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

function fee() {

    return (
        <div className="d-flex flex-column max-w-full overflow-x-hidden bg-[#d4f0fc]">
            <Navbar></Navbar>
            <Section text={"Fee Structures"}></Section>

            <div class="relative font-inter antialiased text-[#000] my-8">

                <main class="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
                    <div class="w-full mx-auto px-4 md:px-5 py-10">
                        <div class="flex justify-center">

                            <div class="w-full max-w-6xl bg-white shadow-xl rounded-2xl">
                                <div class="p-3">

                                    {/* <!-- Table --> */}
                                    <div class="overflow-x-auto">
                                        <table class="table-auto w-full">
                                            {/* <!-- Table header --> */}
                                            <thead class="text-[20px] text-slate-500/70">
                                                <tr>
                                                    <th class="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky ">
                                                        <div class="font-medium text-left">SL</div>
                                                    </th>
                                                    <th class="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky ">
                                                        <div class="font-medium text-left">Description</div>
                                                    </th>
                                                    <th class="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky ">
                                                        <div class="font-medium text-left"></div>
                                                    </th>
                                                    <th class="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky ">
                                                        <div class="font-medium text-left">Amount</div>
                                                    </th>
                                                    <th class="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky ">
                                                        <div class="font-medium text-left"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {/* <!-- Table body --> */}
                                            <tbody class="text-[12px] text-slate-500/70 font-medium">
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left"> </div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left"> </div>
                                                    </td>
                                                    <td class="pl-12 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left">1st-3rd</div>
                                                    </td>
                                                    <td class="pl-12 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left">4th-6th</div>
                                                    </td>
                                                    <td class="pl-12 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left">7th-8th</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>Admission Fees</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>30,000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>30,000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>30,000</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>Semester Fees</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>15,000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>14,000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>12,000</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left"></div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left">Tuition Fees</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left"></div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left">Tk per credit</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div class="text-[15px] font-medium text-left"></div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.1</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>DC Regular</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2590</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2075</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2050</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.2</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>URC Regular</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.3</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>DC Retake</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1295</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1037.5</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1025</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.4</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>URC Retake</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>550</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>550</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>550</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.5</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>DC Improvement</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2590</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2075</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>2050</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>3.6</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>URC Improvement</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>1100</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>4</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>Exam Fee</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>300</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>300</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>300</div>
                                                    </td>
                                                </tr>
                                                {/* <!-- Row --> */}
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>5</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>Establishment Fee</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>4000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>4000</div>
                                                    </td>
                                                    <td class="px-5 py-3 border-b border-slate-200 first:pl-3">
                                                        <div>4000</div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>

            <div className='max-w-2xl mx-auto mt-2 mb-8'>
                <a class="enroll" href='https://www.iiuc.ac.bd/home/fee-calculator'>
                    Fee Calculator
                </a>
            </div>

            {/* <div className="fixed bottom-0 w-full z-[10]"> */}
            <Footer></Footer>
            {/* </div> */}
        </div>
    );
}

export default fee;