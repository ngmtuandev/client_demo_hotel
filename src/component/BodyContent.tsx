import LabelCard from "./LabelCard"

const BodyContent = () => {
  return (
    <div className='flex mt-8 justify-center gap-8'>
      <div className=' w-[30%] h-[400px] flex flex-col justify-between gap-4'>
        <div className="bg-red-600 relative w-[100%] h-[47%]">
            <LabelCard rdLeft={0} rdRight={5} styleConfig={'top-0 left-0'} text={'Hạ long'}></LabelCard>
        </div>
        <div className="bg-green-600 relative w-[100%] h-[47%]">
            <LabelCard rdLeft={0} rdRight={5} styleConfig={'top-0 left-0'} text={'Hạ long'}></LabelCard>
        </div>
      </div>
      <div className='bg-yellow-500 w-[30%] relative h-[400px]'>
        <LabelCard rdLeft={0} rdRight={5}  styleConfig={'top-0 left-0'} text={'Hạ long'}></LabelCard>
      </div>
      <div className='w-[30%] h-[400px] flex flex-col relative justify-between gap-4'>
        <div className="bg-red-600 w-[100%] h-[47%]">
            <LabelCard styleConfig={'top-0 right-0 ml'} rdLeft={5} rdRight={0} text={'Hạ long'}></LabelCard>
        </div>
        <div className="bg-green-600 w-[100%] h-[47%] relative">
            <LabelCard styleConfig={'top-0 right-0 '} rdLeft={5} rdRight={0}  text={'Hạ long'}></LabelCard>
        </div>
      </div>
    </div>
  )
}

export default BodyContent
