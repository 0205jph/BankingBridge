export default function News() {
  const newsArticles = [
    {
      category: "MARKET UPDATE",
      title: "Federal Reserve Announces New Interest Rate Policy",
      excerpt: "Understanding the impact of recent monetary policy changes on your savings and loan rates...",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "TECHNOLOGY",
      title: "New Mobile Banking Features Now Available",
      excerpt: "Discover the latest enhancements to our mobile banking app including voice commands and AI assistance...",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      category: "SECURITY",
      title: "Enhanced Security Measures Implemented",
      excerpt: "Learn about our latest security upgrades and how they protect your financial information...",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-bank-blue-900 mb-6">Banking News & Updates</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Stay informed with the latest banking news, regulatory updates, and financial insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-green-600 text-sm font-semibold mb-2">{article.category}</div>
                <h3 className="text-xl font-bold text-bank-blue-900 mb-3">{article.title}</h3>
                <p className="text-gray-800 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{article.date}</span>
                  <a href="#" className="text-bank-blue-600 hover:text-bank-blue-800 font-medium">Read More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
