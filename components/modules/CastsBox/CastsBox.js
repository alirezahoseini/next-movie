import React, { useEffect } from "react";
import Image from "next/image";
import useApi from "@/hooks/useApi";

function CastsBox(props) {
  const { data, error, setApiUrl } = useApi();
  const { postId, type } = props;
  const url = {
    value: `${type}/${postId}/credits`,
    queries: "language=en-US",
  };
  const loadArray = [1,2,3,4,5,6,7,8,9,10]

  useEffect(() => {
    setApiUrl(url);
  }, []);

  return (
    <>
      {/* ------- start of Cast box --------  */}
      {data !== undefined && !error ? (
        <div
          id="cast-box"
          className="max-w-screen-2xl mx-auto px-4 w-full overflow-hidden"
        >
          <h2 className="font-bold my-4">Top Billed Cast</h2>
          <div
            id="slides-wrapper"
            style={{ flexFlow: "row nowrap" }}
            className="flex flex-nowrap flex-[1,1,auto]  overflow-x-auto
           pb-4 
         [&::-webkit-scrollbar]:h-2
         lg:[&::-webkit-scrollbar]:h-4
         [&::-webkit-scrollbar-track]:rounded-full
         [&::-webkit-scrollbar-track]:bg-gray-700
         [&::-webkit-scrollbar-thumb]:rounded-full
         [&::-webkit-scrollbar-thumb]:bg-gray-600
         dark:[&::-webkit-scrollbar-track]:bg-neutral-900
         dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
         "
          >
            {data.cast.slice(0, 12).map((item) => (
              <div
                key={item.credit_id}
                className="bg-gray-950 max-w-fit rounded-md overflow-hidden min-w-[138px] inline-block mx-3"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                  width={200}
                  height={175}
                  alt={item.name}
                />
                <div className="p-2 flex flex-col gap-2 justify-between items-start overflow-hidden">
                  <h4 className="font-bold text-sm text-wrap">{item.name}</h4>
                  <p className="text-xs text-nowrap w-full text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          id="cast-box"
          className="max-w-screen-2xl mx-auto px-4 w-full overflow-hidden"
        >
          <h2 className="font-bold my-4">Top Billed Cast</h2>
          <div
            id="slides-wrapper"
            style={{ flexFlow: "row nowrap" }}
            className="flex flex-nowrap flex-[1,1,auto]  overflow-x-auto
           pb-4 
         [&::-webkit-scrollbar]:h-2
         lg:[&::-webkit-scrollbar]:h-4
         [&::-webkit-scrollbar-track]:rounded-full
         [&::-webkit-scrollbar-track]:bg-gray-700
         [&::-webkit-scrollbar-thumb]:rounded-full
         [&::-webkit-scrollbar-thumb]:bg-gray-600
         dark:[&::-webkit-scrollbar-track]:bg-neutral-900
         dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
         "
          >
            {loadArray.map((i) => (
              <div
                key={i}
                className="bg-gray-950 max-w-fit rounded-md overflow-hidden min-w-[138px] inline-block mx-3"
              >
                <div className="w-full h-[175px] bg-slate-800 animate-pulse"></div>
                <div className="p-2 flex flex-col gap-2 justify-between items-start overflow-hidden">
                  <div className="bg-slate-800 w-2/3 h-3 rounded-lg animate-pulse"></div>
                  <div className="bg-slate-800 w-3/4 h-2 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------- END of Cast box --------  */}
    </>
  );
}

export default CastsBox;

const a = {
  cast: [
    {
      adult: false,
      gender: 2,
      id: 72466,
      known_for_department: "Acting",
      name: "Colin Farrell",
      original_name: "Colin Farrell",
      popularity: 58.371,
      profile_path: "/h3mEWRE0vIztDNtdwulYk7WLeym.jpg",
      character: "Oz 'The Penguin' Cobb",
      credit_id: "622909201130bd0067c76aea",
      order: 0,
    },
    {
      adult: false,
      gender: 1,
      id: 204392,
      known_for_department: "Acting",
      name: "Cristin Milioti",
      original_name: "Cristin Milioti",
      popularity: 48.696,
      profile_path: "/54vq2oKWfVR7YZZeoY5j47hTZxW.jpg",
      character: "Sofia Falcone",
      credit_id: "635ffa7dfd63000079a9ab65",
      order: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 1761634,
      known_for_department: "Acting",
      name: "Rhenzy Feliz",
      original_name: "Rhenzy Feliz",
      popularity: 16.532,
      profile_path: "/9YPe3GgyWjG4D0GnTx9KzfvnO0L.jpg",
      character: "Victor Aguilar",
      credit_id: "63eaf7caf9253200c7b0de72",
      order: 2,
    },
    {
      adult: false,
      gender: 1,
      id: 77013,
      known_for_department: "Acting",
      name: "Deirdre O'Connell",
      original_name: "Deirdre O'Connell",
      popularity: 3.75,
      profile_path: "/14e0AZOZafenduP7O6oMLSL92RP.jpg",
      character: "Francis Cobb",
      credit_id: "63eaf80df92532009d9215fb",
      order: 3,
    },
    {
      adult: false,
      gender: 2,
      id: 6574,
      known_for_department: "Acting",
      name: "Clancy Brown",
      original_name: "Clancy Brown",
      popularity: 35.768,
      profile_path: "/1JeBRNG7VS7r64V9lOvej9bZXW5.jpg",
      character: "Salvatore Maroni",
      credit_id: "66ae83b2a21a3a80d50b6b6b",
      order: 4,
    },
    {
      adult: false,
      gender: 1,
      id: 37158,
      known_for_department: "Acting",
      name: "Carmen Ejogo",
      original_name: "Carmen Ejogo",
      popularity: 10.703,
      profile_path: "/h6xRaiD2dMfDLhJIe57r14Ml278.jpg",
      character: "Eve Karlo",
      credit_id: "66c31acc177cc794856e3856",
      order: 5,
    },
    {
      adult: false,
      gender: 1,
      id: 21041,
      known_for_department: "Acting",
      name: "Shohreh Aghdashloo",
      original_name: "Shohreh Aghdashloo",
      popularity: 17.434,
      profile_path: "/vuE7zU05kmnalORwIzVTi8uIMRA.jpg",
      character: "Nadia Maroni",
      credit_id: "66fa0609621e8616b45f93e4",
      order: 6,
    },
    {
      adult: false,
      gender: 2,
      id: 51995,
      known_for_department: "Acting",
      name: "Theo Rossi",
      original_name: "Theo Rossi",
      popularity: 12.938,
      profile_path: "/344QE41Jileu4OE41cmYgBxc5BF.jpg",
      character: "Dr. Julian Rush",
      credit_id: "66fa06167f13b7b12aa26bdb",
      order: 7,
    },
    {
      adult: false,
      gender: 2,
      id: 50217,
      known_for_department: "Acting",
      name: "Michael Kelly",
      original_name: "Michael Kelly",
      popularity: 15.596,
      profile_path: "/6MI8HhX1GWbcrWG8DiHffzmqaVm.jpg",
      character: "Johnny Viti",
      credit_id: "63eaf801813cb6007941a5bb",
      order: 8,
    },
  ],
  crew: [
    {
      adult: false,
      gender: 2,
      id: 32278,
      known_for_department: "Directing",
      name: "Matt Reeves",
      original_name: "Matt Reeves",
      popularity: 4.899,
      profile_path: "/5rA459xpMt6IeJG7ZqvhLbSozEH.jpg",
      credit_id: "622909772f1be0001b2a4ee0",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 935717,
      known_for_department: "Production",
      name: "Dylan Clark",
      original_name: "Dylan Clark",
      popularity: 2.735,
      profile_path: "/fZVAPLYPTPUMHL3yPSqf1020GdJ.jpg",
      credit_id: "62290982e92d830048431992",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 72466,
      known_for_department: "Acting",
      name: "Colin Farrell",
      original_name: "Colin Farrell",
      popularity: 58.371,
      profile_path: "/h3mEWRE0vIztDNtdwulYk7WLeym.jpg",
      credit_id: "6229098c1bf2660019ad6896",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 2838882,
      known_for_department: "Production",
      name: "Daniel Pipski",
      original_name: "Daniel Pipski",
      popularity: 3.262,
      profile_path: null,
      credit_id: "622909981bf26600667e43d9",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 1223896,
      known_for_department: "Writing",
      name: "Lauren LeFranc",
      original_name: "Lauren LeFranc",
      popularity: 2.078,
      profile_path: null,
      credit_id: "622909b4d2c0c10046192c7b",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 3794,
      known_for_department: "Writing",
      name: "Bob Kane",
      original_name: "Bob Kane",
      popularity: 3.67,
      profile_path: "/vuXwrlqaUydA4t5SFVdQkK9KsZL.jpg",
      credit_id: "62292398726fb100471d35c5",
      department: "Writing",
      job: "Characters",
    },
    {
      adult: false,
      gender: 2,
      id: 198034,
      known_for_department: "Writing",
      name: "Bill Finger",
      original_name: "Bill Finger",
      popularity: 8.067,
      profile_path: null,
      credit_id: "622923a1d8d329006e1ffa84",
      department: "Writing",
      job: "Characters",
    },
    {
      adult: false,
      gender: 2,
      id: 79434,
      known_for_department: "Production",
      name: "Craig Zobel",
      original_name: "Craig Zobel",
      popularity: 4.851,
      profile_path: "/kvXpSBGJHDvlaufobFMVcLloXKx.jpg",
      credit_id: "63406ed10859b40081396bf6",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 2062011,
      known_for_department: "Costume & Make-Up",
      name: "Helen Huang",
      original_name: "Helen Huang",
      popularity: 0.023,
      profile_path: null,
      credit_id: "660898ecd5191f017e31440f",
      department: "Costume & Make-Up",
      job: "Costume Design",
    },
    {
      adult: false,
      gender: 2,
      id: 23420,
      known_for_department: "Production",
      name: "Bill Carraro",
      original_name: "Bill Carraro",
      popularity: 1.771,
      profile_path: "/qt2ZxwwjbQe0kytalxbdLka6Vzn.jpg",
      credit_id: "6674a183c040cf477631f0e8",
      department: "Production",
      job: "Executive Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 1945089,
      known_for_department: "Sound",
      name: "Mick Giacchino",
      original_name: "Mick Giacchino",
      popularity: 0.529,
      profile_path: null,
      credit_id: "66e471d5c81b24b3fe24334b",
      department: "Sound",
      job: "Original Music Composer",
    },
    {
      adult: false,
      gender: 2,
      id: 1371513,
      known_for_department: "Writing",
      name: "Vladimir Cvetko",
      original_name: "Vladimir Cvetko",
      popularity: 5.304,
      profile_path: "/oZ8nJE3B0kYMcWoMZZVrMRIX5af.jpg",
      credit_id: "66ece74927a9af9d0dadc0bd",
      department: "Production",
      job: "Co-Executive Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 2068642,
      known_for_department: "Writing",
      name: "Erika Johnson",
      original_name: "Erika Johnson",
      popularity: 0.141,
      profile_path: null,
      credit_id: "66ece75649cc34284a229fc7",
      department: "Production",
      job: "Co-Executive Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1254612,
      known_for_department: "Writing",
      name: "Noelle Valdivia",
      original_name: "Noelle Valdivia",
      popularity: 1.065,
      profile_path: null,
      credit_id: "66ece762ca79005fbfbdb04d",
      department: "Production",
      job: "Co-Executive Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 3952497,
      known_for_department: "Writing",
      name: "John McCutcheon",
      original_name: "John McCutcheon",
      popularity: 0.271,
      profile_path: null,
      credit_id: "66ecea0e25c8eb884d22a6fa",
      department: "Production",
      job: "Supervising Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 64919,
      known_for_department: "Writing",
      name: "Megan Martin",
      original_name: "Megan Martin",
      popularity: 0.227,
      profile_path: null,
      credit_id: "66ecea20cdd108ed9322a1e5",
      department: "Production",
      job: "Consulting Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 1582519,
      known_for_department: "Writing",
      name: "Kira Snyder",
      original_name: "Kira Snyder",
      popularity: 2.135,
      profile_path: "/wQeoheJhWJzoPLnCmBkr48afTN6.jpg",
      credit_id: "66ecea274f1b6453db22a392",
      department: "Production",
      job: "Consulting Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 58357,
      known_for_department: "Production",
      name: "Dana Robin",
      original_name: "Dana Robin",
      popularity: 0.973,
      profile_path: null,
      credit_id: "66ecea323a495f9858bdb0fe",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 76531,
      known_for_department: "Writing",
      name: "Nick Towne",
      original_name: "Nick Towne",
      popularity: 1.705,
      profile_path: null,
      credit_id: "66ecea3eca79005fbfbdb153",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 3068643,
      known_for_department: "Writing",
      name: "Corina Maritescu",
      original_name: "Corina Maritescu",
      popularity: 0.96,
      profile_path: null,
      credit_id: "66ecea504f1b6453db22a3a7",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1502779,
      known_for_department: "Acting",
      name: "Claudine Farrell",
      original_name: "Claudine Farrell",
      popularity: 0.097,
      profile_path: null,
      credit_id: "66ecea5c4f1b6453db22a3b0",
      department: "Production",
      job: "Producer",
    },
    {
      adult: false,
      gender: 1,
      id: 119179,
      known_for_department: "Production",
      name: "Cindy Tolan",
      original_name: "Cindy Tolan",
      popularity: 0.666,
      profile_path: null,
      credit_id: "66ecedefcdd108ed9322a397",
      department: "Production",
      job: "Casting",
    },
    {
      adult: false,
      gender: 0,
      id: 1886004,
      known_for_department: "Production",
      name: "Suzanne Ryan",
      original_name: "Suzanne Ryan",
      popularity: 0.056,
      profile_path: null,
      credit_id: "66ecedf827a9af9d0dadc276",
      department: "Production",
      job: "Casting",
    },
    {
      adult: false,
      gender: 1,
      id: 17148,
      known_for_department: "Art",
      name: "Kalina Ivanov",
      original_name: "Kalina Ivanov",
      popularity: 0.578,
      profile_path: null,
      credit_id: "66ecee1e4f1b6453db22a3d7",
      department: "Art",
      job: "Production Design",
    },
    {
      adult: false,
      gender: 0,
      id: 1836187,
      known_for_department: "Writing",
      name: "Shaye Ogbonna",
      original_name: "Shaye Ogbonna",
      popularity: 2.842,
      profile_path: "/gDwsf4dd1KQh9Ex82ZxOrTN9epY.jpg",
      credit_id: "66ecee653a495f9858bdb15f",
      department: "Production",
      job: "Co-Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1852275,
      known_for_department: "Editing",
      name: "Breannah Gibson",
      original_name: "Breannah Gibson",
      popularity: 0.306,
      profile_path: null,
      credit_id: "66ecee974f1b6453db22a406",
      department: "Production",
      job: "Co-Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 1720304,
      known_for_department: "Production",
      name: "Jonathan Ferrantelli",
      original_name: "Jonathan Ferrantelli",
      popularity: 0.257,
      profile_path: null,
      credit_id: "66eceecffc4672626badbd08",
      department: "Production",
      job: "Co-Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 1118728,
      known_for_department: "Production",
      name: "Bryan H. Carroll",
      original_name: "Bryan H. Carroll",
      popularity: 0.49,
      profile_path: null,
      credit_id: "66eceed6fc4672626badbd10",
      department: "Production",
      job: "Co-Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 58357,
      known_for_department: "Production",
      name: "Dana Robin",
      original_name: "Dana Robin",
      popularity: 0.973,
      profile_path: null,
      credit_id: "66eceee1fc4672626badbd1a",
      department: "Production",
      job: "Unit Production Manager",
    },
    {
      adult: false,
      gender: 2,
      id: 23420,
      known_for_department: "Production",
      name: "Bill Carraro",
      original_name: "Bill Carraro",
      popularity: 1.771,
      profile_path: "/qt2ZxwwjbQe0kytalxbdLka6Vzn.jpg",
      credit_id: "66eceee93a495f9858bdb1cd",
      department: "Production",
      job: "Unit Production Manager",
    },
    {
      adult: false,
      gender: 0,
      id: 2469540,
      known_for_department: "Costume & Make-Up",
      name: "Mike Marino",
      original_name: "Mike Marino",
      popularity: 0.148,
      profile_path: null,
      credit_id: "66ecef271923fe0327adbf5a",
      department: "Costume & Make-Up",
      job: "Prosthetic Designer",
    },
    {
      adult: false,
      gender: 1,
      id: 2023802,
      known_for_department: "Sound",
      name: "Jen Malone",
      original_name: "Jen Malone",
      popularity: 0.98,
      profile_path: null,
      credit_id: "66ecef54cdd108ed9322a3d6",
      department: "Sound",
      job: "Music Supervisor",
    },
    {
      adult: false,
      gender: 1,
      id: 2190052,
      known_for_department: "Sound",
      name: "Whitney Pilzer",
      original_name: "Whitney Pilzer",
      popularity: 0.067,
      profile_path: null,
      credit_id: "66ecef5ccdd108ed9322a3d9",
      department: "Sound",
      job: "Music Supervisor",
    },
    {
      adult: false,
      gender: 2,
      id: 1394963,
      known_for_department: "Visual Effects",
      name: "John H. Han",
      original_name: "John H. Han",
      popularity: 0.524,
      profile_path: null,
      credit_id: "66ecef7425c8eb884d22a71b",
      department: "Visual Effects",
      job: "Visual Effects Supervisor",
    },
    {
      adult: false,
      gender: 0,
      id: 2040945,
      known_for_department: "Visual Effects",
      name: "Michelle Rose",
      original_name: "Michelle Rose",
      popularity: 0.01,
      profile_path: null,
      credit_id: "66ecefa182f5618d90adbefc",
      department: "Visual Effects",
      job: "Visual Effects Producer",
    },
    {
      adult: false,
      gender: 2,
      id: 176558,
      known_for_department: "Crew",
      name: "Stephen A. Pope",
      original_name: "Stephen A. Pope",
      popularity: 1.089,
      profile_path: null,
      credit_id: "66ecf053cdd108ed9322a4be",
      department: "Crew",
      job: "Stunt Coordinator",
    },
    {
      adult: false,
      gender: 2,
      id: 1074163,
      known_for_department: "Crew",
      name: "G. A. Aguilar",
      original_name: "G. A. Aguilar",
      popularity: 1.63,
      profile_path: "/qhnZkskvONZXKmijtOzTG0uP5kS.jpg",
      credit_id: "66ecf06682f5618d90adbfa1",
      department: "Crew",
      job: "Stunt Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 1431113,
      known_for_department: "Production",
      name: "Megan Jahoda",
      original_name: "Megan Jahoda",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5724b672d7709bdb83f",
      department: "Production",
      job: "Associate Producer",
    },
    {
      adult: false,
      gender: 0,
      id: 4178285,
      known_for_department: "Production",
      name: "Mike Buonanno",
      original_name: "Mike Buonanno",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5894f1b6453db22a6ce",
      department: "Production",
      job: "Assistant Production Manager",
    },
    {
      adult: false,
      gender: 0,
      id: 2738274,
      known_for_department: "Production",
      name: "Amanda Jabes",
      original_name: "Amanda Jabes",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5954f1b6453db22a6d8",
      department: "Production",
      job: "Production Supervisor",
    },
    {
      adult: false,
      gender: 0,
      id: 4952694,
      known_for_department: "Writing",
      name: "Zoe Cooper",
      original_name: "Zoe Cooper",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5b625c8eb884d22a86c",
      department: "Writing",
      job: "Writers' Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952696,
      known_for_department: "Writing",
      name: "Marlee Fox",
      original_name: "Marlee Fox",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5c13a495f9858bdb46b",
      department: "Writing",
      job: "Writers' Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952697,
      known_for_department: "Directing",
      name: "Dan Fuchs",
      original_name: "Dan Fuchs",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5cf1923fe0327adc0dc",
      department: "Directing",
      job: "Script Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 4952698,
      known_for_department: "Production",
      name: "Lauren Muñoz Robinson",
      original_name: "Lauren Muñoz Robinson",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5df1923fe0327adc0ef",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 3093212,
      known_for_department: "Crew",
      name: "Moses Ntekereze",
      original_name: "Moses Ntekereze",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5ea4f1b6453db22a721",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952699,
      known_for_department: "Writing",
      name: "Janelle Gatchalian",
      original_name: "Janelle Gatchalian",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf5f727a9af9d0dadc4d8",
      department: "Writing",
      job: "Writers' Production",
    },
    {
      adult: false,
      gender: 0,
      id: 4952701,
      known_for_department: "Crew",
      name: "Noah Simon",
      original_name: "Noah Simon",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf6161923fe0327adc112",
      department: "Crew",
      job: "Actor's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952702,
      known_for_department: "Crew",
      name: "Coco McNeil",
      original_name: "Coco McNeil",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf62027a9af9d0dadc4e3",
      department: "Crew",
      job: "Actor's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 1847567,
      known_for_department: "Crew",
      name: "Melissa Zeigler",
      original_name: "Melissa Zeigler",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf6344b672d7709bdb89f",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4394094,
      known_for_department: "Directing",
      name: "Shawn Antoine II",
      original_name: "Shawn Antoine II",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf64527a9af9d0dadc50c",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952704,
      known_for_department: "Production",
      name: "Jack Weitzner",
      original_name: "Jack Weitzner",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf6514b672d7709bdb8b7",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952705,
      known_for_department: "Production",
      name: "Benito Sanchez",
      original_name: "Benito Sanchez",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf65c4b672d7709bdb8c6",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952707,
      known_for_department: "Production",
      name: "Gabe Tagliamonte",
      original_name: "Gabe Tagliamonte",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf668cdd108ed9322a5de",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952708,
      known_for_department: "Production",
      name: "Kinga Vasicsek",
      original_name: "Kinga Vasicsek",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf67625c8eb884d22a8bb",
      department: "Production",
      job: "Executive Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952709,
      known_for_department: "Production",
      name: "Irene Christodoulakis",
      original_name: "Irene Christodoulakis",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf68982f5618d90adc1c6",
      department: "Production",
      job: "Producer's Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952710,
      known_for_department: "Crew",
      name: "Sara Murphy",
      original_name: "Sara Murphy",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf6f84b672d7709bdb923",
      department: "Crew",
      job: "Production Office Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952711,
      known_for_department: "Crew",
      name: "Alexa Stormes",
      original_name: "Alexa Stormes",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf70225c8eb884d22a92b",
      department: "Crew",
      job: "Production Office Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952712,
      known_for_department: "Crew",
      name: "Daryn Crowninshield",
      original_name: "Daryn Crowninshield",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf7104b672d7709bdb945",
      department: "Crew",
      job: "Production Office Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952713,
      known_for_department: "Production",
      name: "Chris Camuto",
      original_name: "Chris Camuto",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf71fcdd108ed9322a617",
      department: "Production",
      job: "Production Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952714,
      known_for_department: "Production",
      name: "Bryan Avino",
      original_name: "Bryan Avino",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf72f82f5618d90adc251",
      department: "Production",
      job: "First Assistant Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952715,
      known_for_department: "Production",
      name: "Samantha Thompson",
      original_name: "Samantha Thompson",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf73acdd108ed9322a632",
      department: "Production",
      job: "First Assistant Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952716,
      known_for_department: "Production",
      name: "Paula Goldberg",
      original_name: "Paula Goldberg",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf75d82f5618d90adc27a",
      department: "Production",
      job: "Second Assistant Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952717,
      known_for_department: "Production",
      name: "Matthew Sullivan",
      original_name: "Matthew Sullivan",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf7b4cdd108ed9322a67f",
      department: "Production",
      job: "Second Assistant Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952718,
      known_for_department: "Production",
      name: "Rachel Gibson",
      original_name: "Rachel Gibson",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf7c582f5618d90adc2bb",
      department: "Production",
      job: "Payroll Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952719,
      known_for_department: "Production",
      name: "Sonam Gurung",
      original_name: "Sonam Gurung",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf7d3cdd108ed9322a690",
      department: "Production",
      job: "Payroll Accountant",
    },
    {
      adult: false,
      gender: 2,
      id: 2448134,
      known_for_department: "Acting",
      name: "Josh Liveright",
      original_name: "Josh Liveright",
      popularity: 0.035,
      profile_path: null,
      credit_id: "66ecf7e44b672d7709bdb977",
      department: "Production",
      job: "Payroll Accountant",
    },
    {
      adult: false,
      gender: 0,
      id: 3343274,
      known_for_department: "Production",
      name: "Nicholas Petrovich",
      original_name: "Nicholas Petrovich",
      popularity: 0.016,
      profile_path: null,
      credit_id: "66ecf7f8fc4672626badbe50",
      department: "Production",
      job: "Casting Associate",
    },
    {
      adult: false,
      gender: 0,
      id: 4952720,
      known_for_department: "Production",
      name: "Sahtia Rivers",
      original_name: "Sahtia Rivers",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf80eb236c70006bdb4b8",
      department: "Production",
      job: "Casting Assistant",
    },
    {
      adult: false,
      gender: 0,
      id: 4952721,
      known_for_department: "Production",
      name: "Tiana Graziadei",
      original_name: "Tiana Graziadei",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf82cb236c70006bdb4e0",
      department: "Production",
      job: "Production Coordinator",
    },
    {
      adult: false,
      gender: 2,
      id: 4733285,
      known_for_department: "Production",
      name: "Scott Hedley",
      original_name: "Scott Hedley",
      popularity: 0.129,
      profile_path: null,
      credit_id: "66ecf83b82f5618d90adc2f3",
      department: "Production",
      job: "Assistant Production Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 4952722,
      known_for_department: "Production",
      name: "Paige Reinis",
      original_name: "Paige Reinis",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8454b672d7709bdb99e",
      department: "Production",
      job: "Assistant Production Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 4952723,
      known_for_department: "Production",
      name: "Mike Puckett",
      original_name: "Mike Puckett",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8594b672d7709bdb9b2",
      department: "Production",
      job: "Production Secretary",
    },
    {
      adult: false,
      gender: 1,
      id: 1419114,
      known_for_department: "Crew",
      name: "Jessica Drake",
      original_name: "Jessica Drake",
      popularity: 11.973,
      profile_path: null,
      credit_id: "66ecf8664f1b6453db22a779",
      department: "Crew",
      job: "Dialect Coach",
    },
    {
      adult: false,
      gender: 0,
      id: 3261843,
      known_for_department: "Acting",
      name: "Charise Greene",
      original_name: "Charise Greene",
      popularity: 1.795,
      profile_path: null,
      credit_id: "66ecf874b236c70006bdb4f2",
      department: "Crew",
      job: "Dialect Coach",
    },
    {
      adult: false,
      gender: 0,
      id: 3250268,
      known_for_department: "Acting",
      name: "Marc Winski",
      original_name: "Marc Winski",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf880b236c70006bdb4fc",
      department: "Crew",
      job: "Other",
    },
    {
      adult: false,
      gender: 0,
      id: 2020999,
      known_for_department: "Art",
      name: "Deborah Wheatley",
      original_name: "Deborah Wheatley",
      popularity: 0.095,
      profile_path: null,
      credit_id: "66ecf894cdd108ed9322a6d2",
      department: "Art",
      job: "Supervising Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 2379211,
      known_for_department: "Art",
      name: "Adam Karavatakis",
      original_name: "Adam Karavatakis",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8c7fc4672626badbea6",
      department: "Art",
      job: "Art Direction",
    },
    {
      adult: false,
      gender: 0,
      id: 4952724,
      known_for_department: "Art",
      name: "Scott Davis",
      original_name: "Scott Davis",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8e3b236c70006bdb520",
      department: "Art",
      job: "Art Direction",
    },
    {
      adult: false,
      gender: 0,
      id: 3342472,
      known_for_department: "Art",
      name: "Katherine Akiko Day",
      original_name: "Katherine Akiko Day",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8f282f5618d90adc30b",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 4440224,
      known_for_department: "Art",
      name: "Brett Martinez",
      original_name: "Brett Martinez",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf8fecdd108ed9322a71b",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 4952726,
      known_for_department: "Art",
      name: "Elizabeth Stadstad",
      original_name: "Elizabeth Stadstad",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf90d4b672d7709bdb9ec",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 1,
      id: 1790341,
      known_for_department: "Art",
      name: "Lauren Rockman",
      original_name: "Lauren Rockman",
      popularity: 0.13,
      profile_path: null,
      credit_id: "66ecf9181923fe0327adc14d",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 4952728,
      known_for_department: "Art",
      name: "Henry Blazer",
      original_name: "Henry Blazer",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9294f1b6453db22a7b4",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 4952729,
      known_for_department: "Art",
      name: "Ada Smith Keller",
      original_name: "Ada Smith Keller",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf93ab236c70006bdb542",
      department: "Art",
      job: "Assistant Art Director",
    },
    {
      adult: false,
      gender: 0,
      id: 1790089,
      known_for_department: "Art",
      name: "Hugh Sicotte",
      original_name: "Hugh Sicotte",
      popularity: 1.06,
      profile_path: null,
      credit_id: "66ecf94b4f1b6453db22a7c5",
      department: "Art",
      job: "Concept Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 2047129,
      known_for_department: "Art",
      name: "Dan Caplan",
      original_name: "Dan Caplan",
      popularity: 1.012,
      profile_path: null,
      credit_id: "66ecf9564f1b6453db22a7ce",
      department: "Art",
      job: "Storyboard Artist",
    },
    {
      adult: false,
      gender: 0,
      id: 4610635,
      known_for_department: "Acting",
      name: "Katya Austin",
      original_name: "Katya Austin",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9754f1b6453db22a7f5",
      department: "Art",
      job: "Graphic Designer",
    },
    {
      adult: false,
      gender: 0,
      id: 3241639,
      known_for_department: "Art",
      name: "Abigail Udden",
      original_name: "Abigail Udden",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf98f82f5618d90adc349",
      department: "Art",
      job: "Art Department Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 3490280,
      known_for_department: "Costume & Make-Up",
      name: "Alexandra Engelson",
      original_name: "Alexandra Engelson",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9a1b236c70006bdb583",
      department: "Crew",
      job: "Clearances Coordinator",
    },
    {
      adult: false,
      gender: 0,
      id: 1972193,
      known_for_department: "Production",
      name: "Keith A. Adams",
      original_name: "Keith A. Adams",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9ce4f1b6453db22a83f",
      department: "Production",
      job: "Location Manager",
    },
    {
      adult: false,
      gender: 0,
      id: 2492071,
      known_for_department: "Production",
      name: "Nick Pray",
      original_name: "Nick Pray",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9e71923fe0327adc1b2",
      department: "Production",
      job: "Assistant Location Manager",
    },
    {
      adult: false,
      gender: 0,
      id: 4952733,
      known_for_department: "Production",
      name: "Veronica Rioseco",
      original_name: "Veronica Rioseco",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecf9f34f1b6453db22a858",
      department: "Production",
      job: "Assistant Location Manager",
    },
    {
      adult: false,
      gender: 0,
      id: 4952734,
      known_for_department: "Production",
      name: "Amanda Kim",
      original_name: "Amanda Kim",
      popularity: 0.001,
      profile_path: null,
      credit_id: "66ecfa0b82f5618d90adc372",
      department: "Production",
      job: "Location Coordinator",
    },
  ],
  id: 194764,
};