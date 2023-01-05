import {Label, TextInput, Checkbox, Button} from 'flowbite-react';

export default function Login () {
    return(
        <div className='flex justify-center items-center h-screen'>
          <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Label htmlFor="signup">
      Sign up  <a href="#"
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        here
        </a>
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>  
        </div>
    );
}