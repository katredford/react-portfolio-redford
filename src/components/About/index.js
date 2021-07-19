import React from "react";
import coverImage from "../../assets/images/katie.JPG";

function About() {
	return (
		<section style={{ height: "800px" }} className="my-5">
			<h1 id="about">Katie Redford</h1>
			<img
				src={coverImage}
				className="my-2"
				style={{ width: "50%" }}
				alt="katie portrait"
			/>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui
				blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
				et quas molestias excepturi sint occaecati cupiditate non provident,
				similique sunt in culpa qui officia deserunt mollitia animi, id est
				laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
				distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
				cumque nihil impedit quo minus id quod maxime placeat facere possimus,
				omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
				quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
				ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
				earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
				voluptatibus maiores alias consequatur aut perferendis doloribus
				asperiores repellat
			</p>
		</section>
	);
}

export default About;
