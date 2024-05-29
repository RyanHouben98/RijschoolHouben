import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <div className="pt-32 pb-12">
        <div className="container mx-auto flex flex-col gap-4">
          <h1>Onze Prijzen</h1>
          <Separator />
          <div className="flex flex-col gap-4">
            <h2>Pakketten</h2>
            <div className="grid grid-cols-4 gap-4">
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
                  <CardTitle>Pakket 35</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                  </p>
                </CardContent>
              </Card>
            </div>
            <h2>Overig</h2>
            <div className="grid grid-cols-2 gap-4">
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
                  <CardTitle>Pakket 35</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                  </p>
                </CardContent>
              </Card>
            </div>
            <h2>Theorie</h2>
            <div className="grid grid-cols-2 gap-4">
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
                  <CardTitle>Pakket 35</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pakket 30 rijlessen (60 min. & examen) Theorieboek €2015,-
                  </p>
                </CardContent>
              </Card>
            </div>
            <span>
              Prijzen vanaf 5 februari 2024, wijzigingen onder voorbehoud.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
