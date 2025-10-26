import m from "mithril";
import Modal from "../../core/Modal";

export default class ProjectModal extends Modal {

    scheduledTimeout = null;
    carouselIndex = 0;
    
    oninit(vnode) {
        super.oninit?.(vnode);
        this.carouselIndex = 0;
    }

    oncreate(vnode) {
        super.oncreate(vnode);
        this.scheduleAutomaticCarouselAdvance(vnode);
    }

    onremove() {
        clearTimeout(this.scheduledTimeout);
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
        
        const Carousel = () => m(".project-modal-carousel", {
            tabindex: 0,
            "aria-roledescription": "carousel",
            "aria-label": title || "Project images",
            onkeydown: (e) => {
                if (e.key === "ArrowLeft") this.navigateCarousel(vnode, -1);
                if (e.key === "ArrowRight") this.navigateCarousel(vnode, 1);
            },
        }, [
            m(".project-modal-carousel-track", { style: `transform:translateX(-${this.carouselIndex * 100}%);` },
                images.map(img =>
                    m(".project-modal-carousel-slide", [
                        m("img", { src: img.src, alt: img.alt || title || "Project image", style: img.style }),
                    ])
                )
            ),
            images.length > 1 && m("button.project-modal-carousel-arrow.left", {
                onclick: () => this.navigateCarousel(vnode, -1),
                "aria-label": "Previous image",
            }, "‹"),
            images.length > 1 && m("button.project-modal-carousel-arrow.right", {
                onclick: () => this.navigateCarousel(vnode, 1),
                "aria-label": "Next image"
            }, "›"),
            images.length > 1 && m(".project-modal-carousel-dots",
                images.map((_, i) =>
                    m("button.dot" + (i === this.carouselIndex ? ".is-active" : ""), {
                        onclick: () => (this.carouselIndex = i), "aria-label": `Go to slide ${i + 1}`
                    }))
            )
        ])
    
        return m(".project-modal", [
            Carousel(),
            m(".project-modal-content", [ m(vnode.attrs.content) ])
        ])
    }
        
    navigateCarousel(vnode, increment) {
        if (!vnode.attrs.images.length) {
            return;
        }
        
        this.carouselIndex = (this.carouselIndex + increment + vnode.attrs.images.length) % vnode.attrs.images.length;
        this.scheduleAutomaticCarouselAdvance(vnode);
    }

    scheduleAutomaticCarouselAdvance(vnode) {
        clearTimeout(this.scheduledTimeout);
        this.scheduledTimeout = window.setTimeout(() => {
            this.navigateCarousel(vnode, 1);
            m.redraw();
            this.schedule();
        }, 10000);
    };
}