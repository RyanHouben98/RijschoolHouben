import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Book, Car, ChevronsDown, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-gray-500 w-full h-screen">
        <div className="relative container mx-auto h-full flex flex-col gap-4 items-center justify-center">
          <span>Welkom bij Rijschool Houben</span>
          <span>Groot geworden door klein te blijven</span>
          <Card className="w-full">
            <CardContent className="flex flex-col gap-4 text-center pt-[24px]">
              <span>Actie gratis theorie broek!</span>
              <span>Beginnen met rijlessen of een proefles?</span>
              <Button className="self-center">Meld je snel aan</Button>
            </CardContent>
          </Card>
          <ChevronsDown className="absolute w-12 h-12 animate-bounce text-white bottom-5" />
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-4 text-center">
          <h2>Waarom Rijschool Houben</h2>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 text-center items-center">
              <Car />
              <h3>Jaren ervaring</h3>
              <p>
                Met 23 jaar ervaring als rij-instructeur staat rijschool Houben
                voor kwaliteit, betrouwbaarheid en een uitstekende service!
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center items-center">
              <Lightbulb />
              <h3>Jaren ervaring</h3>
              <p>
                Met 23 jaar ervaring als rij-instructeur staat rijschool Houben
                voor kwaliteit, betrouwbaarheid en een uitstekende service!
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center items-center">
              <Book />
              <h3>Jaren ervaring</h3>
              <p>
                Met 23 jaar ervaring als rij-instructeur staat rijschool Houben
                voor kwaliteit, betrouwbaarheid en een uitstekende service!
              </p>
            </div>
          </div>
          <Button className="self-center">Plan een proefles</Button>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col gap-4 text-center">
          <h2>Onze pakketten</h2>
          <span>
            Lees <Link href="/prices">hier</Link> meer over al one pakketten
          </span>
          <Separator />
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Pakket 30</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pakket 35</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pakket 40</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pakket 45</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-4 text-center">
          <h2>Geslaagde kandidaten 2024</h2>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 text-center items-center">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>1</CarouselItem>
                  <CarouselItem>2</CarouselItem>
                  <CarouselItem>3</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
