import {
  Field,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const NewsLetter = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl text-white font-bold tracking-tight">
        JOIN THE MOVEMENT
      </h1>

      <p className="text-lg text-white/70 font-serif mt-6">
        Receive new drops before everyone else.
      </p>

      <Field className="max-w-xl mx-auto mt-9">
        <div className="flex items-center gap-2">
          <Input
            className="h-12 bg-transparent border-white/30 text-white placeholder:text-white/40"
            type="email"
            placeholder="Enter your email..."
          />

          <Button
            type="submit"
            className="h-12 px-7"
          >
            JOIN
          </Button>
        </div>

        <FieldDescription className="text-white/50 mt-3">
          No spam. Just drops, releases & updates.
        </FieldDescription>
      </Field>
    </div>
  )
}

export default NewsLetter

