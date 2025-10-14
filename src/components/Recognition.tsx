const Recognition = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Reconhecido por empresas líderes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-muted-foreground">Logo 1</div>
          <div className="text-muted-foreground">Logo 2</div>
          <div className="text-muted-foreground">Logo 3</div>
          <div className="text-muted-foreground">Logo 4</div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
