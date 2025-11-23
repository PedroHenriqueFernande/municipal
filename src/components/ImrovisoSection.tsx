const ImrovisoSection = () => {
    return (
        <section className="relative py-20 md:py-24 bg-[#0a0a0a] text-center overflow-hidden">
            {/* Background Map */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-15 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/map_bg.png)' }}
            />

            <div className="container max-w-[1200px] mx-auto px-5 relative z-10">
                <div className="text-red-custom text-2xl mb-5">❌</div>

                <div className="max-w-[600px] mx-auto mb-10 text-gray-text text-lg md:text-xl">
                    <p>
                        Ou pior: vai assistir seus concorrentes fazendo a maior lucro do ano...
                        enquanto você prepara uma campanha de última hora, sem a estratégia correta,
                        e sem resultado.
                    </p>
                </div>

                <div className="bg-[#b91c1c] text-white p-8 md:p-10 max-w-[700px] mx-auto font-black text-xl md:text-2xl uppercase shadow-2xl">
                    <p>Novembro não é mês de improviso. É mês de execução cirúrgica.</p>
                </div>
            </div>
        </section>
    )
}

export default ImrovisoSection
