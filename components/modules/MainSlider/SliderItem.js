import Image from "next/image";
import Link from "next/link";


function SliderItem(props) {
    const { title, description, poster, bgImage, url } = props;
    return (
        <div className="slider-bg-img block w-full h-[90vh] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${bgImage})`, backgroundColor: 'red' }}>
            <div className="bg-slate-950 w-full h-full top-0 left-0 bg-opacity-70 z-0 absolute" />
            {/* slider Body  */}
            <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col-reverse lg:flex-row lg:items-center justify-center px-10 gap-5">
                <div className="lg:w-1/2">
                    <h2 className="font-bold lg:text-3xl mb-4 text-xl ">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-300">
                        {description}
                    </p>
                    <Link href={url} className="mt-5 inline-block bg-red-700 px-4 text-sm hover:-translate-y-1 transition-all py-2 rounded-full shadow-md " style={{ boxShadow: '0 0 10px 1px	rgba(255, 0, 0,0.6)' }}>Watch Now</Link>
                    <Link href={url} className="mt-5 text-sm hover:-translate-y-1 transition-all inline-block border px-4 py-2 rounded-full shadow-md ml-5" >Watch trailer</Link>
                </div>
                <Image loading="lazy" className="rounded-xl w-[150px] lg:w-[200px]"
                    src={poster} width={200} height={300} alt="" />
            </div>
            {/* slider Body  */}
        </div>
    )
}

export default SliderItem