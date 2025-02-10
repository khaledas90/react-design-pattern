import { useEffect, useState } from "react";
import { Post } from "../Bad/FeatchPostList";

type props = {
  url: string;
  render: (data: Post | null, isLoading: boolean) => JSX.Element;
};

export default function FeatcherData({ url, render }: props) {
  const [data, setData] = useState<Post | null>(null);
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  return render(data, IsLoading);
}
