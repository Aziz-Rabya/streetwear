import { Button } from "@/components/ui/button"

const Pagination = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-25 mb-10 mx-10 text-white font-bold">
       <Button><i className="bx bx-arrow-left" />PREVIOUS</Button>
      <h3>PAGE: 1 in 25</h3>
      <Button><i className="bx bx-arrow-right" />NEXT</Button>
    </div>
  )
}

export default Pagination
