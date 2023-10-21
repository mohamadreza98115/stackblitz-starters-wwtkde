import { Button, Input } from '../Components/NextUI';
import { HiOutlineMail } from 'react-icons/hi';
import { BiSolidUser } from 'react-icons/bi';
import { BsFillLockFill } from 'react-icons/bs';

const Form = () => {
  return (
    <form className="space-y-3">
      <h3 className="text-center text-2xl">Regestration</h3>
      <Input
        type="text"
        label="name"
        placeholder="John"
        labelPlacement="outside"
        startContent={
          <BiSolidUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />

      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        labelPlacement="outside"
        startContent={
          <HiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Input
        type="password"
        label="password"
        placeholder="******"
        labelPlacement="outside"
        startContent={
          <BsFillLockFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Button type="submit" fullWidth>
        Register
      </Button>
    </form>
  );
};

export default Form;
