const fromUrl = "https://www.tiendainglesa.com.uy/busqueda?0,0,Martini,0";

document.querySelectorAll(".ProductCompBack").forEach(x => {
	const obj = {};
	obj.url = x.querySelector("a")["href"];
	obj.price = x.querySelector(".ProductPrice").innerText;
	obj.name = x.querySelector(".wCartProductName a").innerText;
	buff.push(obj);
});

var dishe = [];
document.querySelectorAll("h3").forEach((x, i) => {
	const obj = {};
	obj.url = "#";
	obj.price = "350";
	obj.name =
		x.innerText + " " + document.querySelectorAll("h3 + p")[i].innerText;

	dishe.push(obj);
});
