export function useGlobalModals() {
  const showMobileMenu = useState<boolean>('showMobileMenu')
  const toggleMobileMenu = useToggle(showMobileMenu)

  tryOnUnmounted(() => {
    showMobileMenu.value = false
  })

  return {
    showMobileMenu,
    toggleMobileMenu,
  }
}
