import { lazy } from "react";

const LayoutRu = lazy(() => import("/src/components/ru/LayoutRu/LayoutRu.jsx"));
const SliderCardItemFotosComponent = lazy(() =>
	import("/src/components/SliderCardItemFotosComponent/SliderCardItemFotosComponent.jsx"),
);
const HomePageRu = lazy(() => import("/src/pages/ru/HomePageRu/HomePageRu.jsx"));
const ContactsPageRu = lazy(() => import("/src/pages/ru/ContactsPageRu/ContactsPageRu.jsx"));
const ObjectsPageRu = lazy(() => import("/src/pages/ru/ObjectsPageRu/ObjectsPageRu.jsx"));
const OurTeamRu = lazy(() => import("/src/pages/ru/ContactsPageRu/OurTeamRu/OurTeamRu.jsx"));
const OurFotosRu = lazy(() => import("/src/pages/ru/ContactsPageRu/OurFotosRu/OurFotosRu.jsx"));
const ObjectCardItemPageRu = lazy(() => import("/src/pages/ru/ObjectCardItemPageRu/ObjectCardItemPageRu.jsx"));
const FotosCardItemPage = lazy(() => import("/src/pages/FotosCardItemPage/FotosCardItemPage.jsx"));

export {
	LayoutRu,
	HomePageRu,
	ContactsPageRu,
	ObjectsPageRu,
	OurTeamRu,
	OurFotosRu,
	ObjectCardItemPageRu,
	FotosCardItemPage,
	SliderCardItemFotosComponent
};
