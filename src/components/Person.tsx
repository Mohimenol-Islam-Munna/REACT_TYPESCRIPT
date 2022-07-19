import { PersonProps } from "./Person.types";

function Person({ name }: PersonProps) {
  return (
    <div>
      <h2 className="text-red-500 text-3xl">
        Person Information : {name.firstName} {name.lastName}
      </h2>
    </div>
  );
}

export default Person;
