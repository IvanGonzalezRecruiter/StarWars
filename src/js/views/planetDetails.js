import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";

export default function Planeta() {
  const params = useParams();
  console.log(params);
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (params.ids) {
      actions.verPlaneta(params.ids);
    }
  }, [params.ids]);
  console.log(store.planet);
  const index = params.ids - 1;
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img width={450} height={300} src={store.imgPlanets[index].url} />
        </div>
        <div className="col-6">
          <h1>{store.planet ? store.planet.properties.name : "cargando"}</h1>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
      </div>
      <div className="row border-top border-danger">
        <div className="col-2">
          Diameter:{" "}
          {store.planet ? store.planet.properties.diameter : "cargando"}
        </div>
        <div className="col-2">
          Climate: {store.planet ? store.planet.properties.climate : "cargando"}
        </div>
        <div className="col-2">
          Population:{" "}
          {store.planet ? store.planet.properties.population : "cargando"}
        </div>
        <div className="col-2">
          Terrain: {store.planet ? store.planet.properties.terrain : "cargando"}
        </div>
        <div className="col-2">
          Rotation period:{" "}
          {store.planet ? store.planet.properties.rotation_period : "cargando"}
        </div>
        <div className="col-2">
          Orbital period:{" "}
          {store.planet ? store.planet.properties.orbital_period : "cargando"}
        </div>
      </div>
    </div>
  );
}
