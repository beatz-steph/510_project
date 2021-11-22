import React from "react";
import { Header } from "../components";

import { TEAM_MEMBERS } from "../data";

const About = () => {
  return (
    <div className="h-screen">
      <Header alt />
      <div className="mt-52 w-3/5 mx-auto flex flex-col ">
        <h1 className="text-3xl text-bold mb-12">Team members</h1>
        <table class="table-fixed border-separate border border-black px-10 py-10">
          <thead>
            <tr>
              <th class="w-1/2 text-left">Name</th>
              <th class="w-1/4 text-left">Matric number</th>
            </tr>
          </thead>
          <tbody>
            {TEAM_MEMBERS.map((item) => (
              <tr className="pb-4">
                <td>{item.name}</td>
                <td>{item.matric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
