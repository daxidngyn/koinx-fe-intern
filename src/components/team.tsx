import Image from "next/image";
import Recommendations from "./recommendations";

const teamMembers = [
  {
    imageUrl: "/team/john-smith.png",
    name: "John Smith",
  },
  {
    imageUrl: "/team/elina-williams.png",
    name: "Elina Williams",
  },
  {
    imageUrl: "/team/john-smith-2.png",
    name: "John Smith",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg p-4 lg:p-6">
      <h3 className="text-[#0F1629] font-semibold text-2xl">Team</h3>
      <div className="mt-4 space-y-6">
        <p className="leading-[26px]">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>

        <div className="space-y-6">
          {teamMembers.map((teamMember) => (
            <TeamCard
              key={teamMember.imageUrl}
              imageUrl={teamMember.imageUrl}
              name={teamMember.name}
            />
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <Recommendations />
      </div>
    </section>
  );
}

const TeamCard = (props: { imageUrl: string; name: string }) => {
  return (
    <div className="rounded-lg p-4 bg-[#E8F4FD] text-center flex flex-col lg:flex-row">
      <div className="flex flex-col items-center lg:items-center w-full">
        <Image
          src={props.imageUrl}
          alt={props.name}
          width={97}
          height={105}
          className="rounded-md"
        />
        <span className="font-semibold text-[#0F1629] mt-3.5">
          {props.name}
        </span>
        <span className="font-medium text-[#788F9B] text-xs mt-1">
          Designation here
        </span>
      </div>

      <p className="mt-4 text-left text-sm leading-[22px] text-[#0F1629]">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};
