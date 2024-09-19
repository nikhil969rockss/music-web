import { SignupFormDemo } from "@/components/SignUpForm"
import { Boxes } from "@/components/ui/background-boxes"

const page = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative ">
      <Boxes className="h-full absolute " />

      <div className="absolute flex justify-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] mr-3 max-w-sm w-full  my-5" >
        <SignupFormDemo/>
      </div>
      
    </div>
  )
}

export default page