import m from "mithril";
import Modal from "../../core/Modal";

export default class ProjectModal extends Modal {
    
    oninit(vnode) {
        super.oninit?.(vnode);
        this.idx = 0;
    }
    
    view(vnode) {
        return super.view(vnode);
    }

    close() {
        super.close();
        m.route.set("/");
    }
    
    renderContent(vnode) {
        const {
            title,
            images = [],
        } = vnode.attrs;
        
        const navigateCarousel = (increment) => {
            if (!images.length) {
                return;
            }
            
            this.idx = (this.idx + increment + images.length) % images.length;
        }
        
        const Carousel = () => m(".project-modal-carousel", {
            tabindex: 0,
            "aria-roledescription": "carousel",
            "aria-label": title || "Project images",
            onkeydown: (e) => {
                if (e.key === "ArrowLeft") navigateCarousel(-1);
                if (e.key === "ArrowRight") navigateCarousel(1);
            },
        }, [
            m(".project-modal-carousel-track", { style: `transform:translateX(-${this.idx * 100}%);` },
                images.map(img =>
                    m(".project-modal-carousel-slide", [
                        m("img", { src: img.src, alt: img.alt || title || "Project image", style: img.style }),
                    ])
                )
            ),
            images.length > 1 && m("button.project-modal-carousel-arrow.left", {
                onclick: () => navigateCarousel(-1),
                "aria-label": "Previous image",
            }, "‹"),
            images.length > 1 && m("button.project-modal-carousel-arrow.right", {
                onclick: () => navigateCarousel(1),
                "aria-label": "Next image"
            }, "›"),
            images.length > 1 && m(".project-modal-carousel-dots",
                images.map((_, i) =>
                    m("button.dot" + (i === this.idx ? ".is-active" : ""), {
                        onclick: () => (this.idx = i), "aria-label": `Go to slide ${i + 1}`
                    }))
            )
        ])
    
        return m(".project-modal", [
            Carousel(),
            m(".project-modal-content", [ m(vnode.attrs.content) ])
        ])
    }
}