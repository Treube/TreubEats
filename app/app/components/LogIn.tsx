import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authenticate } from '../../lib/actions'

export function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your username and password
          </DialogDescription>
        </DialogHeader>
        <form  action = {authenticate}>
        <div className="grid gap-4 py-4">
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="col-span-3" placeholder = "username" required aria-describedby="name-error"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input type = "password" id="password" className="col-span-3" placeholder = "password" required aria-describedby="Enter Password"/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
