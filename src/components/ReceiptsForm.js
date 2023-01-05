import { Label, TextInput, Button, FileInput } from "flowbite-react";

export default function ReceiptsForm () {
    return (
        <div className="w-10/12 mx-auto">
        <div>
        <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="date"
        value="Date"
      />
    </div>
    <TextInput
      id="date"
      type="date"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="name"
      />
    </div>
    <TextInput
      id="name"
      type="text"
    />
  </div>
  <div id="fileUpload">
  <div className="mb-2 block">
    <Label
      htmlFor="file"
      value="Upload file"
    />
  </div>
  <FileInput
    id="file"
    helperText="Upload your Receipt"
  />
</div>
  <Button type="submit">
    Submit
  </Button>
</form>
</div>
</div>
    );
}