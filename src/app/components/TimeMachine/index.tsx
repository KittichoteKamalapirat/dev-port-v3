import React from "react";
import { cn } from "../../../lib/cn";
import Image from "next/image";
import styles from "./TimeMachine.module.css";
import { Version } from "./TimeMachineOverlay";

interface Props {
  versions: Version[];
  currentVersion: number;
}

const TimeMachine = ({ versions, currentVersion }: Props) => {
  return (
    <div className="w-[600px] h-[400px]">
      {versions
        .filter((ver) => ver.number <= currentVersion)
        .map((version) => (
          <div className={styles.time} key={`version-${version.number}`}>
            {/* make the entire card a link */}

            <Image
              alt={String(version.number)}
              src={version.thumbnail}
              width={600}
              height={300}
              className={cn(
                "rounded-md w-11/12 mx-auto border-white dark:border-2"
              )}
            />

            {/* <div
              className={cn(
                "absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt",
                "bg-gradient-to-r from-pink-600 to-purple-600"
              )}
            /> */}
            <a
              href={version.link}
              target="_blank"
              aria-label={`version ${version.number}(opens in new tab))`}
              className=""
              rel="noreferrer noopener"
            >
              <span className="absolute inset-x-0 inset-y-0 hidden rounded md:-inset-x-0 md:-inset-y-0 lg:block" />
            </a>
          </div>
        ))}
    </div>
  );
};
export default TimeMachine;
