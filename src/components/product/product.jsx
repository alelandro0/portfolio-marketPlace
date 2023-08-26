export const Product =()=>{
    const imgProduct='https://i.pinimg.com/originals/30/5f/c4/305fc473470867a347e7e27a9c2451f0.jpg'
    return(
        <div className='w-80 h-90 rounded-2xl bg-sky-50 mt-9 flex flex-col items-center'>
            <img className='rounded-2xl w-10/12 h-1/2 rounded-t-2xl object-cover mt-10 scroll-m-10 rounded'  src ={imgProduct} alt="mgProduct" />
            <h2 className='text-black font-serif mt-5'>Category</h2>
            <div className='w-full h-20 flex justify-evenly'>
                <p className='text-emerald-950 font-serif mt-2'>gym</p>
                <p className='text-black font-serif mt-2'>$price</p>
            </div>
        </div>
    )
}