"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectType = "link" | "modal-image" | "modal-video" | "swap";

interface Project {
  id: number;
  title: string;
  category: string;
  type: ProjectType;
  media: string;
  mediaSecondary?: string;
  linkUrl?: string;
  bgColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Odisseia Qualquer",
    category: "Posicionamento Digital",
    type: "modal-image",
    media: "/assets/odisseia.jpg",
    bgColor: "bg-[#e8e4dd]",
  },
  {
    id: 2,
    title: "Baddie Place",
    category: "Desenvolvimento Web",
    type: "link",
    media: "/assets/baddie.jpg",
    linkUrl: "https://jottagpy.github.io/site-baddieplace/",
    bgColor: "bg-[#d7ccb9]",
  },
  {
    id: 3,
    title: "Plataforma inteligente para acelerar a criação de conteúdo",
    category: "Ecossistema de IA Exclusivo",
    type: "link",
    media: "/assets/ia-thumb.jpg",
    linkUrl: "https://socialmindai-rho.vercel.app/#",
    bgColor: "bg-[#c7b79a]",
  },
  {
    id: 4,
    title: "Bossy Digital Marketing (EUA)",
    category: "Edição de Vídeo",
    type: "modal-video",
    media: "/assets/bossy-thumb.jpg",
    mediaSecondary: "/assets/video-bossy.mp4",
    bgColor: "bg-[#e8e4dd]",
  },
  {
    id: 5,
    title: "Lançamento de Curso",
    category: "Estratégia Digital",
    type: "link",
    media: "/assets/kiwify.jpg",
    linkUrl: "https://dashboard.kiwify.com.br/course/premium/dc1edb41-5d7d-4b5c-8e0b-02538650df23",
    bgColor: "bg-[#d7ccb9]",
  },
  {
    id: 6,
    title: "Campanha Eleitoral",
    category: "Planejamento de Conteúdo",
    type: "modal-image",
    media: "/assets/eleitoral-depois.jpg",
    mediaSecondary: "/assets/eleitoral-antes.jpg",
    bgColor: "bg-[#c7b79a]",
  },
];

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState<Project | null>(null);
  const [swappedCards, setSwappedCards] = useState<Record<number, boolean>>({});
  const [showBefore, setShowBefore] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const handleProjectClick = (project: Project) => {
    if (project.type === "link" && project.linkUrl) {
      window.open(project.linkUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (project.type === "swap") {
      setSwappedCards((previous) => ({
        ...previous,
        [project.id]: !previous[project.id],
      }));
      return;
    }

    setShowBefore(false);
    setActiveModal(project);
  };

  const closeModal = () => setActiveModal(null);

  const renderModalContent = () => {
    if (!activeModal) return null;

    if (activeModal.type === "modal-video" && activeModal.mediaSecondary) {
      return (
        <video
          src={activeModal.mediaSecondary}
          controls
          autoPlay
          className="w-full max-h-[75vh] rounded-lg bg-black object-contain shadow-2xl"
        />
      );
    }

    const imageSrc =
      activeModal.id === 6 && showBefore && activeModal.mediaSecondary
        ? activeModal.mediaSecondary
        : activeModal.media;
    const imageAlt =
      activeModal.id === 6
        ? showBefore
          ? "Antes da campanha eleitoral"
          : "Depois da campanha eleitoral"
        : activeModal.title;

    return (
      <div className="relative h-[75vh] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="100vw"
        />

        {activeModal.id === 6 && activeModal.mediaSecondary && (
          <>
            <button
              type="button"
              onClick={() => setShowBefore(true)}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-4 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-black/55 hover:text-white sm:left-4"
            >
              ← Ver depois
            </button>
            <button
              type="button"
              onClick={() => setShowBefore(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-4 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-black/55 hover:text-white sm:right-4"
            >
              Ver antes →
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className="bg-[#F8F7F4] px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[3px] text-[#8c7b60]">
            Portfólio
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-gray-900 lg:text-5xl">
            Projetos em destaque.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isSwapped = swappedCards[project.id];
            const currentMedia = isSwapped && project.mediaSecondary ? project.mediaSecondary : project.media;
            const ctaLabel =
              project.type === "link"
                ? "Visitar site ↗"
                : project.id === 6
                  ? "Comparar ↔"
                  : "Ampliar ⤢";

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleProjectClick(project)}
                className={`group relative flex h-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl text-left ${project.bgColor}`}
                aria-label={`${ctaLabel}: ${project.title}`}
              >
                <Image
                  src={currentMedia}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />

                <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gray-900/80 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="mb-2 translate-y-4 text-sm font-medium uppercase tracking-wider text-[#c7b79a] transition-transform duration-500 group-hover:translate-y-0">
                    {project.category}
                  </span>
                  <h3 className="mb-4 translate-y-4 font-serif text-2xl font-semibold text-white transition-transform delay-75 duration-500 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white/90 backdrop-blur-md">
                    {ctaLabel}
                  </span>
                  {project.id === 6 && (
                    <span className="mt-2 block pl-1 text-[10px] uppercase tracking-widest text-white/50">
                      Deslize para ver o antes
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {activeModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-8 top-6 text-4xl font-light text-white/70 transition-colors hover:text-white"
              aria-label="Fechar modal"
            >
              ×
            </button>

            <div className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center">
              {renderModalContent()}

              <div className="mt-6 text-center">
                <h3 id="portfolio-modal-title" className="font-serif text-2xl text-white">
                  {activeModal.title}
                </h3>
                <p className="mt-1 text-[#c7b79a]">{activeModal.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
