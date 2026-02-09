// Base SVG Component class (Stolen from Michaels solution for OFF! Sorry!)
class SvgIcon extends HTMLElement {
	async loadSvg(path) {
		try {
			const response = await fetch(path);
			const svgText = await response.text();
			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
			const svgElement = svgDoc.querySelector("svg");

			this.setAttribute("aria-hidden", "true");
			this.setAttribute("focusable", "false");

			if (svgElement) {
				svgElement.setAttribute("width", "1em");
				svgElement.setAttribute("height", "1em");
				svgElement.querySelectorAll("path").forEach((path) => {
					path.setAttribute("fill", "currentColor");
				});
				this.innerHTML = svgElement.outerHTML;
			}
		} catch (error) {
			console.error(`Failed to load SVG from ${path}:`, error);
		}
	}
}

customElements.define(
	"icon-postkasse",
	class postkasse extends SvgIcon {
		connectedCallback() {
			this.loadSvg("img/postkasse.svg");
		}
	},
);
customElements.define(
	"icon-smilbrev",
	class smilbrev extends SvgIcon {
		connectedCallback() {
			this.loadSvg("img/smilbrev.svg");
		}
	},
);
customElements.define(
	"icon-leisegbrev",
	class leisegbrev extends SvgIcon {
		connectedCallback() {
			this.loadSvg("img/leisegbrev.svg");
		}
	},
);