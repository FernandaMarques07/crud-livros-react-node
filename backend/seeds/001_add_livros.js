exports.seed = async function(knex) {

  await knex('livros').del()

  await knex('livros').insert([
    {
      titulo: 'Alice No País das Maravilhas (Classic Edition)',
      autor: 'Lewis Carroll',
      preco: 56.27,
      foto: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeZ4Yp1UXDyXFWHs2tghBzbcCuap_JW1ESmkMbKW0fiTa-BuKr6w5Wq_6_kZo77h7xL4nvZr9uDAzKynwg_HsphPvvdwZXRCC_IIp2qJ95fRwWLZW1_k8N'
    },

    {
      titulo: '1984',
      autor: 'George Orwell',
      preco: 49.90,
      foto: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSab7jaJtLncjIYTHKk0MA5VAjnPFeirqD1_uk0B6ZGxjl2lt7hBpJDG0OvrNKeon14IF13_ZXjNcbmBzJSR1RZZCKOcSOkXFb9ZuQv-eQY0ViY1q77D84C'
    }
  ])

}