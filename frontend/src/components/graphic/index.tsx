import Plot from "react-plotly.js";

export const Graphic = ({ ratings }: { ratings: number[] }) => {
  const frequency = [0, 0, 0, 0, 0];
  ratings.forEach((rating) => {
    frequency[rating - 1]++;
  });

  const totalRatings = ratings.length;
  const percentages = frequency.map((count) =>
    ((count / totalRatings) * 100).toFixed(2)
  );

  return (
    <>
      <Plot
        style={{ marginTop: "2rem" }}
        data={[
          {
            x: [
              "1 Estrela",
              "2 Estrelas",
              "3 Estrelas",
              "4 Estrelas",
              "5 Estrelas",
            ],
            y: percentages,
            type: "bar",
            text: percentages.map((p) => `${p}%`),
            hoverinfo: "text",
            marker: {
              color: "rgba(54, 162, 235, 0.6)",
              line: {
                color: "rgba(54, 162, 235, 1)",
                width: 1,
              },
            },
          },
        ]}
        layout={{
          title: "Porcentagem de Avaliações por Nota",
          xaxis: { title: "Notas" },
          yaxis: { title: "Porcentagem (%)" },
          hovermode: "closest",
        }}
      />{" "}
    </>
  );
};
