import { useEffect, useRef, useState } from "react";
import { GlassContainer, GlassImage, SearchBarInput } from "./styles";
import glass from "/public/glass.svg";
import { IProduct } from "../../models/Product";
import Fuse from "fuse.js";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar = ({
  products,
  setFiltred,
}: {
  products: IProduct[];
  setFiltred: any;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const [fuse, setFuse] = useState<Fuse<IProduct>>();

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const search = url.get("s");

  useEffect(() => {
    const fuseInstance = new Fuse(products, {
      keys: ["name"],
      threshold: 0.3,
    });

    setFuse(fuseInstance);
  }, [products]);

  useEffect(() => {
    if (search) {
      setValue(search);
      const result = fuse?.search(search) || [];
      setFiltred(result.map((res) => res.item));
    } else {
      setFiltred(products);
      setValue("");
    }
  }, [search, fuse, setFiltred, products]);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && isFocus && value.trim() !== "") {
      if (inputRef.current) {
        inputRef.current.blur();
      }
      navigate(`/search?s=${value}`);
    } else if (e.key === "Enter" && isFocus && value === "") {
      setFiltred(products);
    }
  };

  const searchItem = () => {
    navigate(`/search?s=${value}`);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocus, value, fuse]);

  return (
    <GlassContainer>
      <SearchBarInput
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <GlassImage onClick={searchItem} src={glass} alt="" />
    </GlassContainer>
  );
};
