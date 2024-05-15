import { useQuery, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getDetails, getHome } from "./actions";

export function useHome(text: string) {
  return useQuery(
    ["home", text],
    () => getHome(text),
    { enabled: !!text }, // only run when text!==''
  );
}
export function useCompare(leftPkg: string, rightPkg: string) {
  const leftQueryKey = ["package", leftPkg];
  const rightQueryKey = ["package", rightPkg];

  const leftPackageQuery = useQuery(leftQueryKey, () => getDetails(leftQueryKey), {
    enabled: !!rightPkg,
  });
  const rightPackageQuery = useQuery(rightQueryKey, () => getDetails(rightQueryKey), {
    enabled: !!leftPkg,
  });

  const leftPackageData = leftPackageQuery.data;
  const rightPackageData = rightPackageQuery.data;

  // Create an object to store the results
  const packageResults = {
    leftPackage: leftPackageData,
    rightPackage: rightPackageData,
  };

  return packageResults;
}
