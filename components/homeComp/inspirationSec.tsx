"use client";

import InspirationCard from "../utils/inspirationCard";
import { Data } from "@/data/data";

// const data = [
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic1.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic2.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic3.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic4.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic5.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic6.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic7.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic8.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic9.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic10.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic11.png"
//     },
//     {
//         "title": "A painting of a woman with long hairs",
//         "img": "/homePics/pic12.png"
//     }
// ]

const InspirationSec = () => {
    const groupedData = Data.reduce((rows: any[], _, index) => {
        if (index % 3 === 0) rows.push(Data.slice(index, index + 3));
        return rows;
    }, []);
    console.log(groupedData, "grouped data");

    return (
        <div>
            <h2 className="font-semibold text-[20px] lg:text-[40px] text-center text-[#222222] pb-[16px] lg:pb-[60px]">Inspirations</h2>


            <div className="block lg:hidden space-y-6">
                {groupedData.map((group, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`grid grid-cols-2 gap-4 ${rowIndex % 2 !== 0 ? "direction-rtl" : ""
                            }`}
                    >
                        {/* Big Card (left on odd rows, right on even rows) */}
                        <div
                            className={`row-span-2 ${rowIndex % 2 !== 0 ? "order-last" : "order-first"
                                }`}
                        >
                            {group[0] && (
                                <InspirationCard
                                    img={group[0].img}
                                    title={group[0].title}
                                    variant="large"
                                    screen="mobile"
                                    height={220}
                                    width={166}
                                />
                            )}
                        </div>

                        {/* Two stacked small cards */}
                        <div className="flex flex-col gap-[10px]">
                            {group.slice(1).map((item:any, i:any) => (
                                <InspirationCard
                                    key={i}
                                    img={item.img}
                                    title={item.title}
                                    variant="small"
                                    screen="mobile"
                                    height={105}
                                    width={166}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6 p-6">
                {Data.map((item, index) => (
                    <InspirationCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        screen="desktop"
                        height={280}
                        width={280}
                    />
                ))}
            </div>
        </div>
    );
};

export default InspirationSec;